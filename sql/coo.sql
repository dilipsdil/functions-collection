
--useful for getting laste updated time on a table, 
SELECT  SCN_TO_TIMESTAMP(MAX(ora_rowscn)) from TABLE_NAME


--if the table is truncated or does not have any data the follwoing is adjusted to prevent errors

SELECT  SCN_TO_TIMESTAMP(nvl(MAX(ora_rowscn),TIMESTAMP_TO_SCN(sysdate))) from TABLE_NAME;
