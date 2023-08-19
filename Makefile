run:
	@PID=$$(lsof -t -i:3000); \
	if [ -n "$$PID" ]; then \
		echo "3000 port exit"; \
		kill $$PID; \
		sleep 2; \
	fi

	npm run dev -- --port 3000 &
