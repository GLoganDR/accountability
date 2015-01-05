#create or replace function show_vote (uid integer, vid integer)
#returns table (vote_id integer, name varchar, party varchar, state varchar, updated_at timestamp, decision varchar[]) AS $$
#declare
#begin
#
#  return query
#    select v.id, v.name, v.party, v.state, v.updated_at, array_agg(distinct d.name), array_agg(distinct p.url)
#    from votes v
#    inner join votes_decisions vd on v.id = vd.vote_id
#    inner join decision d on d.id = vd.decision_id
#    inner join users u on u.id = v.user_id
#    where v.id = vid and u.id = uid
#    group by v.id;
#
#end;
#$$ language plpgsql;
