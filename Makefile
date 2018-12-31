install:
	npm install

even-game:
	npx babel-node -- src/bin/brain-even.js

calc-game:
	npx babel-node -- src/bin/brain-calc.js

gcd-game:
	npx babel-node -- src/bin/brain-gcd.js

progression-game:
	npx babel-node -- src/bin/brain-progression.js

prime-game:
	npx babel-node -- src/bin/brain-prime.js

publish:
	npm publish

lint:
	npx eslint .
