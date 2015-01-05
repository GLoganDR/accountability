#create or replace function add_politician (user_id integer, name varchar, party varchar, state varchar, vote varchar)
#returns integer AS $$
#declare
#
#  pid integer;
#  vid integer;
#  names varchar[];
#  votename varchar;
#
#begin
#
#  -- insert the politician
#  insert into politicians (name, party, user_id, state) values (name, party, user_id, state) returning id into pid;
#  -- turn string into array
#  select string_to_array(vote, ',') into names;
#  raise notice 'pid: %', pid;
#  raise notice 'names: %', names;
#  -- create temp table
#  create temp table tagger on commit drop as select pid, v.id as vid, v.name as vname from vote v where v.name = any(names);
#
#  -- looping over all the votes
#  foreach votename in array names
#  loop
#    vid := (select v.vid from tagger v where v.vname = votename);
#    raise notice 'vid: %', vid;
#
#    -- if the vote does not exist, then insert it
#    IF vid is null then
#      insert into vote (name) values (votename) returning id into vid;
#      insert into tagger values (pid, vid, votename);
#    end if;
#  end loop;
#
#  -- take the temp table and insert it into the join table
#  insert into politicians_votes select v.pid, v.vid from tagger v;
#  -- return the politician id
#  return pid;
#
#end;
#$$ language plpgsql;
