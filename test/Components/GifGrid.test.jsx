import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import { GifGrid } from '../../src/Components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid test', () => {
  const category = 'Star Wars';
  test('Show loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('Show items when images was loaded', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Kenobi',
        url: 'https://localhost/kenobi.jpg',
      },
      {
        id: '123',
        title: 'Skywalker',
        url: 'https://localhost/Skywalker.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});

GifGrid.propsTypes = {
  category: PropTypes.string.isRequired,
};
