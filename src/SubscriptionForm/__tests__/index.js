import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import {SubscriptionForm} from '../index';

test('shows text in email input', async () => {
  const { getByTestId } = render(<SubscriptionForm />)
  const emailInput = getByTestId('email');

  // user types 'Barry' into the email input
  fireEvent.change(emailInput, { target: { value: 'Barry' } })

  // check that the input shows the correct text
  expect(emailInput).toHaveValue('Barry')
})
