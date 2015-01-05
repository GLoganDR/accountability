#create or replace function show_politician (uid integer, pid integer)
#returns table (politician_id integer, name varchar, party varchar, state varchar, updated_at timestamp, vote varchar[]) AS $$
#declare
#begin
#
#  return query
#    select p.id, p.name, p.party, p.state, p.updated_at, array_agg(distinct v.name)
#    from politicians p
#    inner join politicians_votes pv on p.id = pv.politician_id
#    inner join vote v on v.id = pv.vote_id
#    inner join users u on u.id = p.user_id
#    where p.id = pid and u.id = uid
#    group by p.id;
#
#end;
#$$ language plpgsql;
