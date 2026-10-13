-- M1A: explicitly authorized partners. Clients cannot self-assign this role.
-- Apply manually (do not auto-apply to the remote project from app code).

create table if not exists public.partners (
  user_id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  is_active boolean not null default false,
  created_at timestamptz not null default now()
);

comment on table public.partners is
  'Explicitly authorized KAVTET partners. Insert or update rows only as a database operator (SQL editor or service role). Authenticated clients must not be able to grant themselves access.';

alter table public.partners enable row level security;
alter table public.partners force row level security;

revoke all on table public.partners from public, anon, authenticated;
grant select on table public.partners to authenticated;

create policy partners_select_own_active
  on public.partners
  for select
  to authenticated
  using (user_id = auth.uid() and is_active = true);

-- No insert, update, or delete policies for anon or authenticated.
-- The service_role and postgres roles bypass RLS and remain the only way to authorize partners.
