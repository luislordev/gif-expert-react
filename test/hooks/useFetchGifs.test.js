import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Hook useFetchGifs test', () => {
    test('Initial state test', () => {
        const { result } = renderHook(() => useFetchGifs('Star Wars'))
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy()
    })

    test('Must return a array of images and isLoading false', async () => {
        const { result } = renderHook(() => useFetchGifs('Star Wars'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0),
        )

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy()
    })
})