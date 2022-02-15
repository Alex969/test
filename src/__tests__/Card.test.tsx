import React from 'react';
import { render, screen } from "@testing-library/react";
import Card from '../components/Card';

test('card has a header', () => {
  const cardHeader = <Card header='Hello' body='' track='' impact='' />;
  expect(cardHeader).toBeInTheDocument;
})
