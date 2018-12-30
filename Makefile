install:
	npm install

even-game:
	npx babel-node -- src/bin/games/brain-even.js

calc-game:
	npx babel-node -- src/bin/games/brain-calc.js

gcd-game:
	npx babel-node -- src/bin/games/brain-gcd.js

progression-game:
	npx babel-node -- src/bin/games/brain-progression.js

publish:
	npm publish

lint:
	npx eslint .
