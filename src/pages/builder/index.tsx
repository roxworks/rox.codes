import { useRouter } from "next/router";

export default function BuilderSubmissionPage() {
  const router = useRouter();
  const { fs, name } = router.query;

  if(!fs) return null;

  if(fs == "1") {
    router.push(`/builder/fs?name=${name}`, undefined, {shallow: true})
    return null;
  }
  else {
    router.push(`/builder/discord?name=${name}`, undefined, {shallow: true})
    return null;
  }
}
