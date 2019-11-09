import Popper from '../Popper.svelte';
import { render, cleanup } from '@testing-library/svelte';

beforeEach(cleanup);

describe('Popper', () => {
  test('should render a popper with expected markup', () => {
    const targetRef = document.createElement('div');
    const wrapper = render(Popper, { props: { targetRef }});

    expect(wrapper).toMatchSnapshot();
  });

});
