#!/bin/sh

COMMIT_EDITMSG=$1

addBranchNumber() {
  NAME=$(git branch | grep '*' | sed 's/* //') 
  ISSUE_NUMBER="${NAME//[!0-9]/}"
  DESCRIPTION=$(git config branch."$NAME".description)
  echo "[#$ISSUE_NUMBER] $(cat "$COMMIT_EDITMSG")" > "$COMMIT_EDITMSG.temp"
  mv "$COMMIT_EDITMSG.temp" "$COMMIT_EDITMSG"
  if [ -n "$DESCRIPTION" ] 
     echo "" >> "$COMMIT_EDITMSG"
     echo "$DESCRIPTION" >> "$COMMIT_EDITMSG"
  fi 
}

MERGE=$(grep -i 'merge' "$COMMIT_EDITMSG" | wc -l)

if [ "$MERGE" -eq 0 ] ; then
  addBranchNumber
fi
