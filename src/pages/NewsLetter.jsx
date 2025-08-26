import React from "react";
import styled from "styled-components";
import { Form, redirect, useNavigation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const resp = await axios.post(newsletterUrl, data);
    toast.success(resp.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.resp?.data?.msg);
    return error;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="post">
      <Heading>our newsletter</Heading>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          name="name"
          required
        />
      </div>
      {/* lastName */}
      <label htmlFor="lastName" className="form-label">
        last name
      </label>
      <input
        type="text"
        className="form-input"
        id="lastName"
        name="lastName"
        required
      />
      {/* email */}
      <label htmlFor="email" className="form-label">
        email
      </label>
      <input
        type="email"
        className="form-input"
        id="email"
        name="email"
        defaultValue={"test@test.com"}
      />
      <Button type="submit" className="btn btn-block">
        {isSubmitting ? "submitting..." : "submit"}
      </Button>
    </Form>
  );
};

const Heading = styled.h4`
  text-align: center;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  margin-top: 0.5rem;
`;

export default NewsLetter;
