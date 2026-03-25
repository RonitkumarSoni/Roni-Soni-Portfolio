export async function getGithubProfile() {
  try {
    const res = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 3600 }
    });
    if (!res.ok) {
      console.warn("Failed to fetch GitHub profile:", await res.text());
      return null;
    }
    return res.json();
  } catch (e) {
    console.error("Error fetching GitHub profile:", e);
    return null;
  }
}
