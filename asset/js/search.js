const { searchBox } = instantsearch.widgets;
const { connectSearchBox } = instantsearch.connectors;
// or directly use instantsearch.widgets.searchBox()
searchBox({
  container: '#searchbox',
  placeholder: '搜索',
  autofocus: true,
});

// Create a render function
const renderSearchBox = (renderOptions, isFirstRender) => {
  const { query, refine, clear, isSearchStalled, widgetParams } = renderOptions;

  if (isFirstRender) {
    const input = document.createElement('input');

    const loadingIndicator = document.createElement('span');
    loadingIndicator.textContent = 'Loading...';

    const button = document.createElement('button');
    button.textContent = 'X';

    input.addEventListener('input', event => {
      refine(event.target.value);
    });

    button.addEventListener('click', () => {
      clear();
    });

    widgetParams.container.appendChild(input);
    widgetParams.container.appendChild(loadingIndicator);
    widgetParams.container.appendChild(button);
  }

  widgetParams.container.querySelector('input').value = query;
  widgetParams.container.querySelector('span').hidden = !isSearchStalled;
};

// create custom widget
const customSearchBox = connectSearchBox(
  renderSearchBox
);

// instantiate custom widget
search.addWidgets([
  customSearchBox({
    container: document.querySelector('#searchbox'),
  })
]);