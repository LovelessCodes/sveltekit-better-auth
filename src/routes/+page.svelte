<script lang="ts">
import { authClient } from "$lib/client";

const { data }: { data: { user: import("better-auth").User | null } } =
	$props();
</script>
<h1>Welcome to SvelteKit x Better-Auth</h1>
<p>Visit <a href="https://better-auth.com/docs">better-auth.com/docs</a> to read the documentation</p>

{#if data?.user}
	<div>
	<p>
		{data?.user.email}
	</p>
	<button
		onclick={async () => {
		await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    window.location.reload();
                }
            }
        });
		}}
	>
		Signout
	</button>
	</div>
{:else}
	<button
	onclick={async () => {
		await authClient.signIn.social({
		provider: "github",
		});
	}}
	>
	Continue with github
	</button>
{/if}