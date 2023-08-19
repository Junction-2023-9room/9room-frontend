run:
	@PID=$$(lsof -t -i:80); \
	if [ -n "$$PID" ]; then \
		echo "80 port exit"; \
		kill $$PID; \
		sleep 2; \
	fi

	npm build
	npm run ncp
