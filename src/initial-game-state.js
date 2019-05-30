const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null};
const [snippet, setSnippet]= useState('');
const [userText, setUserText] = useState('');
const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

setSnippet(SNIPPETS[snippetIndex]);
setGameState({...gameState, startTime: new Date().getTime() });

