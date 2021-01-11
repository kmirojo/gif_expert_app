import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe('useFetchGifs Hook', () => {
    test('should return innitial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( "Man of Steel" ));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an image array and loading in false', async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( "Man of Steel" ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data).toHaveLength(10);
        expect(loading).toBe(false);
    })
    
})
