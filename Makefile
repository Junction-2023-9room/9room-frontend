run:
	@PID=$$(lsof -t -i:80); \
	if [ -n "$$PID" ]; then \
		echo "80 port exit"; \
		kill $$PID; \
		sleep 2; \
	fi

	npm run build
	pm2 stop "ncp"
	pm2 start "npm run ncp" --name "ncp"

