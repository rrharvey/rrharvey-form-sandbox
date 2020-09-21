import React from "react";
import { useFieldArray } from "react-hook-form";
import { Col, Row } from "./Layout";
import { TextField } from "./TextField";
import { useCustomForm } from "./useCustomForm";
import { Button } from "./Button";
import { Person } from "./Person";

export const Form = ({ randomId }) => {
  const form = useCustomForm({ randomId });
  const { formState, onReset, onSubmit, register } = form;

  const { append, remove, fields: people } = useFieldArray({
    control: form.control,
    name: "people"
  });

  return (
    <form>
      <Row>
        <Col span={5}>
          <TextField name="id" register={register} label="Id" readOnly />
        </Col>
        <Col span={5}>
          <TextField value={formState.isDirty} label="Is Dirty" readOnly />
        </Col>
      </Row>
      {people.map((person, personIndex) => {
        return (
          <Person
            form={form}
            key={person.id}
            person={person}
            personIndex={personIndex}
            remove={remove}
          />
        );
      })}
      <Row>
        <Col>
          <Button mode="link" onClick={() => append({ accounts: [] })}>
            Add Person
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button mode="warning" onClick={onReset}>
            Reset
          </Button>
          <Button onClick={onSubmit} type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </form>
  );
};
