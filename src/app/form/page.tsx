import { SubmitButton } from "./submit-button";
import { createItem } from "./action";

// Server Component
export default async function Home() {
    return (
        <form action={createItem}>
            <input type="text" name="field-name" />
            <SubmitButton />
        </form>
    );
}
