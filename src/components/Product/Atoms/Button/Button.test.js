import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default, DefaultWide, SecondarySmall, DefaultSmallVertical, CustomTheme, NoLabel, Disabled, Fixed } from './Button.stories';

it('renders in the Default state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <Default {...Default.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('renders in the DefaultWide state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <DefaultWide {...DefaultWide.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(1);
});
it('renders in the DefaultSmallVertical state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <DefaultSmallVertical {...DefaultSmallVertical.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('renders in the SecondarySmall state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <SecondarySmall {...SecondarySmall.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('renders in the CustomTheme state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <CustomTheme {...CustomTheme.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('renders in the NoLabel state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <NoLabel {...NoLabel.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(1);
});

it('renders in the Disabled state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <Disabled {...Disabled.args} id="test_button" onClick={onClick} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(0);
});

it('renders in the Fixed state', () => {
  const onClick = jest.fn()
  const { container } = render(
    <Fixed {...Fixed.args} id="test_button" onClick={undefined} />
  );
  expect(container.querySelector('#test_button')).toBeDefined();

  const test_button = container.querySelector('#test_button')
  fireEvent.click(test_button)
  expect(onClick).toHaveBeenCalledTimes(0);
});