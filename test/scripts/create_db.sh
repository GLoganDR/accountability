#!/bin/bash

if [ -z "$1" ] ; then
  echo "Enter a database name"
  exit 1
fi

psql $1 -f ../../db/tables/users.sql
#psql $1 -f ../../db/tables/votes.sql
#
#psql $1 -f ../../db/functions/add_vote.sql
#psql $1 -f ../../db/functions/nuke_vote.sql
#psql $1 -f ../../db/functions/show_vote.sql
