import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");



describe('<GifGrid />', () => {
    
    const category = "Man of Steel"

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
    });
    const wrapper = shallow(
        <GifGrid category={category} />
    );

    test('should match Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should show items when useFetchGifs responds', () => {
        const gifs = [{
            id: "ABC",
            url: "https://localhost/cualquier/cosa.jpg",
            title: "cualquier cosa",
        }];
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(
            <GifGrid category={category} />
        );  
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find("p").exists() ).toBe(false);
        expect( wrapper.find("GifGridItem")).toHaveLength(gifs.length);
    })
    
    
})
