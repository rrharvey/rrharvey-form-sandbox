import _ from "lodash";
import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { mocks } from "./data";

export const useCustomForm = ({ randomId }) => {
  const defaultValues = useMemo(() => mocks(randomId), [randomId]);

  const form = useForm({
    defaultValues
  });

  const { handleSubmit, reset } = form;

  const onReset = useCallback(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(onReset, [onReset]);

  const onSubmit = (values) => {
    console.log(JSON.stringify(values, null, 2));
  };

  return { ...form, onReset, onSubmit: handleSubmit(onSubmit) };
};
