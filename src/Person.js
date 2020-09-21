import React, { useCallback } from "react";
import { Button } from "./Button";
import { Col, Row } from "./Layout";
import { TextField } from "./TextField";
import { useFieldArray } from "react-hook-form";
import { Account } from "./Account";

export const Person = ({ form, personIndex, person, remove }) => {
  const fieldName = `people[${personIndex}]`;
  const { register, control } = form;

  const {
    remove: removeAccount,
    append: appendAccount,
    fields: accounts
  } = useFieldArray({
    control,
    name: `${fieldName}.accounts`
  });

  const handleDelete = useCallback(() => remove(personIndex), [
    personIndex,
    remove
  ]);

  return (
    <fieldset>
      <Row>
        <Col span={5}>
          <TextField
            label="First Name"
            name={`${fieldName}.firstName`}
            defaultValue={person.firstName}
            register={register()}
          />
        </Col>
        <Col span={5}>
          <TextField
            label="Last Name"
            name={`${fieldName}.lastName`}
            defaultValue={person.lastName}
            register={register()}
          />
        </Col>
        <Col span={2}>
          <Button mode="link" onClick={handleDelete}>
            Delete
          </Button>
        </Col>
      </Row>
      {accounts.map((account, accountIndex) => (
        <Account
          key={account.id}
          accountIndex={accountIndex}
          personIndex={personIndex}
          account={account}
          form={form}
          remove={removeAccount}
        />
      ))}
      <Row>
        <Col span={1} />
        <Col>
          <Button mode="link" onClick={() => appendAccount({})}>
            Add Account
          </Button>
        </Col>
      </Row>
    </fieldset>
  );
};
