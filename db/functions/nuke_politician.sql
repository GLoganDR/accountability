#create or replace function nuke_politician (uid integer, pid integer)
#returns integer AS $$
#declare
#begin
#
#  pid := (select p.id from politicians v where p.id = pid and p.user_id = uid);
#  delete from politicians_votes pv where pv.politician_id = pid;
#  delete from politicians p where p.id = pid;
#
#  return pid;
#
#end;
#$$ language plpgsql;
