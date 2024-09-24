import { signOutAction } from "@/app/actions";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/utils/supabase/server";

export default async function AuthButton() {
  const {
    data: { user },
  } = await createClient().auth.getUser();

  // Si les variables d'environnement ne sont pas définies
  if (!hasEnvVars) {
    return (
      <div className="flex gap-4 items-center">
        <div className="text-sm text-red-500">
          Veuillez mettre à jour le fichier .env.local avec la clé anonyme et l'URL.
        </div>
      </div>
    );
  }

  // Si l'utilisateur est connecté, afficher son email et un bouton pour se déconnecter
  if (user) {
    return (
      <div className="flex items-center gap-4">
        Bonjour, {user.email}!
        <form action={signOutAction}>
          <Button type="submit" variant={"outline"}>
            Se déconnecter
          </Button>
        </form>
      </div>
    );
  }

  // Si l'utilisateur n'est pas connecté, afficher un seul bouton pour s'identifier
  return (
    <div className="flex gap-2">
      <Button asChild size="sm" variant={"login"}>
        <Link href="/sign-in">Identifiez-vous</Link>
      </Button>
    </div>
  );
}
