import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Dropdown from './Dropdown';
import ItemList from './ItemList';

const RickAndMortyFetcher = () => {
  const [dataType, setDataType] = useState('character');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const urlMap = {
        character: 'https://rickandmortyapi.com/api/character',
        episode: 'https://rickandmortyapi.com/api/episode',
        location: 'https://rickandmortyapi.com/api/location',
      };

      try {
        const response = await axios.get(urlMap[dataType]);
        const fetchedItems = response.data.results.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        setItems(fetchedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <Container className="my-5">
      <h1 className="mb-4">
        Rick and Morty {dataType.charAt(0).toUpperCase() + dataType.slice(1)}
      </h1>
      <Dropdown dataType={dataType} setDataType={setDataType} />
      <ItemList items={items} />
    </Container>
  );
};

export default RickAndMortyFetcher;
