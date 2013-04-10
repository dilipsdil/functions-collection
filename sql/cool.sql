--useful for getting laste updated time on a table, 
select  SCN_TO_TIMESTAMP(max(ORA_ROWSCN)) from TABLE_NAME


--if the table is truncated or does not have any data the follwoing is adjusted to prevent errors

select  SCN_TO_TIMESTAMP(nvl(max(ORA_ROWSCN),TIMESTAMP_TO_SCN(SYSDATE))) from TABLE_NAME;
