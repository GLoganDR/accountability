#create or replace function add_vote (user_id integer, name varchar, party varchar, state varchar, decision varchar)
#returns integer AS $$
#declare
#
#  vid integer;
#  did integer;
#  names varchar[];
#  decisionname varchar;
#
#begin
#
#  -- insert the vote
#  insert into votes (name, party, user_id, state) values (name, party, user_id, state) returning id into vid;
#  -- turn string into array
#  select string_to_array(decision, ',') into names;
#  raise notice 'vid: %', vid;
#  raise notice 'names: %', names;
#  -- create temp table
#  create temp table tagger on commit drop as select vid, d.id as did, d.name as dname from decision d where d.name = any(names);
#
#  -- looping over all the decisions
#  foreach decisionname in array names
#  loop
#    did := (select d.did from tagger d where d.dname = decisionname);
#    raise notice 'did: %', did;
#
#    -- if the decision does not exist, then insert it
#    IF did is null then
#      insert into decision (name) values (decisionname) returning id into did;
#      insert into tagger values (vid, did, decisionname);
#    end if;
#  end loop;
#
#  -- take the temp table and insert it into the join table
#  insert into votes_decisions select d.vid, d.did from tagger d;
#  -- return the vote id
#  return vid;
#
#end;
#$$ language plpgsql;
