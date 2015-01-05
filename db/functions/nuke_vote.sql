#create or replace function nuke_vote (uid integer, vid integer)
#returns integer AS $$
#declare
#begin
#
#  vid := (select v.id from votes v where v.id = vid and v.user_id = uid);
#  delete from votes_decisions vd where vd.vote_id = vid;
#  delete from votes v where v.id = vid;
#
#  return vid;
#
#end;
#$$ language plpgsql;
