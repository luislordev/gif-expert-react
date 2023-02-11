import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/Components/GifItem';

describe('Gif item component', () => {
  const title = 'Kenobi';
  const url = 'https://example.com/kenobi.gif';

  test('Match with Snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('Show image with url and alt text', () => {
    render(<GifItem title={title} url={url} />);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Show title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
