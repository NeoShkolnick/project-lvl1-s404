install:
	npm install

even-game:
	npx babel-node -- src/bin/games/brain-even.js

calc-game:
	npx babel-node -- src/bin/games/brain-calc.js

publish:
	npm publish

lint:
	npx eslint .
