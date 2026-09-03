-- Run this once in Supabase: SQL Editor -> New query -> Run.
create table if not exists public.problems (
  id text primary key,
  title text not null,
  category text not null,
  keywords text not null default '',
  context text not null default '',
  solution text not null,
  cautions text not null default '',
  created_at timestamptz not null default now()
);

alter table public.problems enable row level security;

create policy "public can read problems"
on public.problems for select to anon using (true);

create policy "public can add problems"
on public.problems for insert to anon with check (true);

create policy "public can update problems"
on public.problems for update to anon using (true) with check (true);

