import data from '../data.json';

export const fetchData = async (path, setInfo) => {
    const {destinations, crew, technology} = data;

    if(path === 'destination'){
        setInfo({
            id: 1,
            information: destinations
        });
    }

    else if (path === 'crew'){
        setInfo({
            id: 2,
            information: crew
        });
    }

    else if(path === 'technology') {
        setInfo({
            id: 3,
            information: technology
        });
    }
}