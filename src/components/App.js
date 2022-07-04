import React, { useState } from 'react';
import Nav from './Nav';
import AnimalContainer from './AnimalContainer';
import Filter from './Filter';
import NewHogForm from './NewHogForm';
import Sort from './Sort';

import hogs from '../porkers_data';
import DisplayBar from './DisplayBar';

function App() {
  const [hogDisplayBar, sethogDisplayBar] = useState([]);

  const [categoriesName, setCategoriesName] = useState('All');

  const [newlyAddedHog, setNewlyAddedHog] = useState(hogs);

  function handleDisplayBarHog(animal) {
    if (!hogDisplayBar.some((e) => e.name === animal.name)) {
      sethogDisplayBar([...hogDisplayBar, animal]);
    }
    /*
    this will put in everything that is not already inside and add the item in
    if it is not inside using the ! to return the true.
       Meaning do the sethog is it is not there
     */
  }

  function handleRemove(singleHog) {
    const newHogArray = hogDisplayBar.filter((hogInDisplayBar) => hogInDisplayBar.name !== singleHog.name); // using !== will filter out as NOT, meaning it will give you the new array without that selected one
    sethogDisplayBar(newHogArray);
  }

  function onCategoryChange(event) {
    setCategoriesName(event.target.value);
  }

  function newHogFromForm(oneHog) {
    setNewlyAddedHog([...newlyAddedHog, oneHog]);
  }

  const [sortBy, setSortBy] = useState('default')

  function sortTheHogs(event) {
    setSortBy(event.target.value);
  }

  const filterHogContainer = newlyAddedHog.filter((hog) => {
    if (categoriesName === 'All') { return true; }
    if (categoriesName === 'yesGreased' && hog.greased) {
      return true;
    }
    if (categoriesName === 'noGreased' && !hog.greased) {
      return true;
    }
    return false;
  });

  if (sortBy !== 'default') {
    filterHogContainer.sort((hog1, hog2) => {
      if (sortBy === 'greased') {
        if (hog1.greased > hog2.greased) return -1;
        else if (hog1.greased < hog2.greased) return 1;
        else { return 0 }
      } 
      else if (sortBy === 'weight') {
        return hog1.weight - hog2.weight

      }
    });
  }

  return (
    <div className="App">
      <Nav />
      <DisplayBar hogDisplayBar={hogDisplayBar} handleRemove={handleRemove} />
      <Filter onCategoryChange={onCategoryChange} />
      <Sort sortTheHogs={sortTheHogs} />
      <AnimalContainer filterHogContainer={filterHogContainer} handleDisplayBarHog={handleDisplayBarHog} />
      <NewHogForm newHogFromForm={newHogFromForm} />
    </div>
  );
}

export default App;
