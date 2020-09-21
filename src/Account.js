import React, { useCallback } from "react";
import { Button } from "./Button";
import { Col, Row } from "./Layout";
import { TextField } from "./TextField";

export const Account = ({
  form,
  personIndex,
  accountIndex,
  account,
  remove
}) => {
  const fieldName = `people[${personIndex}].accounts[${accountIndex}]`;
  const { register } = form;

  const handleDelete = useCallback(() => remove(accountIndex), [
    accountIndex,
    remove
  ]);

  return (
    <Row>
      <Col span={1} />
      <Col span={4}>
        <TextField
          label="Account"
          name={`${fieldName}.accountName`}
          defaultValue={account.accountName}
          register={register()}
        />
      </Col>
      <Col span={5}>
        <TextField
          label="Amount"
          name={`${fieldName}.amount`}
          defaultValue={account.amount}
          register={register()}
        />
      </Col>
      <Col span={2}>
        <Button mode="link" onClick={handleDelete}>
          Delete
        </Button>
      </Col>
    </Row>
  );
};
