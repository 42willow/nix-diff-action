import { B as logInfo, K as runPromise, R as gen, Y as sync, j as catchAll, lr as getState, mr as warning, n as removeWorktree } from "./assets/git-B93axXDy.js";
var cleanup = gen(function* () {
	const worktreePath = yield* sync(() => getState("worktreePath"));
	if (!worktreePath) {
		yield* logInfo("No worktree path saved, skipping cleanup");
		return;
	}
	yield* removeWorktree(worktreePath);
	yield* logInfo(`Cleaned up worktree at ${worktreePath}`);
});
const run = () => cleanup.pipe(catchAll((error) => sync(() => warning(`Cleanup failed: ${error}`))), runPromise);
run();
export { run };

//# sourceMappingURL=cleanup.js.map