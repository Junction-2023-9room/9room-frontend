run:
	@PID=$$(lsof -t -i:80); \
	if [ -n "$$PID" ]; then \
		echo "80 port exit"; \
		kill $$PID; \
		sleep 2; \
	fi

	npm run build
	
	@if pm2 describe ncp > /dev/null 2>&1; then \
		echo "Stopping existing pm2 process named 'ncp'"; \
		pm2 stop ncp; \
		pm2 delete ncp; \
	fi
	
	pm2 start "npm run ncp" --name "ncp"

