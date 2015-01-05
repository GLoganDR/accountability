#create table votes(
#  id serial primary key,
#  name varchar(255) not null,
#  party varchar(255) not null,
#  state varchar(255) not null,
#  decision varchar(255) not null,
#  created_at timestamp not null default now(),
#  user_id integer not null references users(id)
#);
