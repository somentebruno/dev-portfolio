import Image from "next/image";

const technologies = [
    {
        name: "JavaScript",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDieq1tYdyVybRceqGAba9CzASlj2Ft3YmLuzQbes1muQBIUDjRCKkQMYd_BkHbDWyC9OFBMstii7zqIbkNQ9l1YewQagwv0cNRWW6fBVIb8teUFWX9HPBM42Zt2GSyEKQah-MkL-rUg_a_RIeXEZYvFaMw7Xa5OljMNGZeI_vU44cRZHJZXHTpYYgD3dkaVYp1eAX9dbj9MFfsPwC0vGHg8XN5k1RPaVyQ41noFVMsLLY16Z48uv1qrhYDIkHr-oKAOxNEkhKZe7Q",
    },
    {
        name: "React",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyYhWnSx5A1YQP0tv-evPonlFIoc5x3sn3GHGl704jGboCJUo0sIxK-k_s8tLQjFB92ZVnnmdEwFytT9-A0wWSgnXE_gxJn864K0O1mXTObAayG8qpn89kT_O_zdPiRQiKp_fX9QuvrEvY6v3Smdal6NVYiu2T4mYNeV1vDX3VKiqZWkTCmMQKkIH3OttWBx_xpg-GHFBJptSFUTWy5JbxIJIO_yylt001slGixiZgsJTtgGrHiYenQtygbUH5qmkf8ccEWv3fHGo",
    },
    {
        name: "Node.js",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuCksD-FcqpmhN8ExA6v6iKibH0sZS2UlCpwQzVW3QQpOW1pez1u0BI3bHlI-cT5Jmkna-48p9cGCSMNDEKGJPGDhPaOjdgq8rpHElfNHZUMjOx2-CA3jEvGwG7qdH9CyjLyrRWbtZsA52q7_aV7QK0KEhgPfHcwN7ilhHTIEpKVDVkP9_2b-v62X7_V3ikzTrDAR7HamEsD-1Lw4dCZDBaQ11AWydG_B1TKEK_HAYCWiDR68TlPKrINnv78nTfhyKLzWn-Ze7njPSE",
    },
    {
        name: "PostgreSQL",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3LjBh0z2YfsLACSqEkL8d2WY61WXmc7r26gVr-h_LXw9nUDLGiRC9yp4pXp9RZQFfn_EmZ0UwkzpcspzrfPLKEhi5LHi8klaTg_2H96eoAvsSRw_Dg1OpRYqq8fzFwHbBGkooW7yuUv-W_ZjHXyxTVixmg6axylMubSPtXpET_-ZfdEjtkEL0WBMyazlxbTCpZHEZkYdSSzKymWIZGydFPzTmgu7o2AgzXx-4ebsEMf8db-YEfqnOZptxMR42J_INDF9y-0-Qjdo",
    },
    {
        name: "Git",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_XL4xpv59YxlTxL3N0zDZW7RolBXFM_0T73Un7_3Cyds4Xnr71L7v_UJCYmJqR3_UuNVBsTBLgdCKPBP2uRPwqo3UljGdQP2CWxfWUkB5Zb_gP4mzgzELGn3WpD7HohuY2bRD7fEuWPs5wEgiXCPaw5UwpMCbDBd0PrayXqET0l6PhFggZ-0IiHBUXoVqP1570c4YT1JodP1cBDxOZFthYG3vW5kAHIBUXFrhs9WFCpYAr1Wh4oh08MnNw3l4MEBhHT5CxAxFYfc",
    },
    {
        name: "Figma",
        icon: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZR_WHXCgstZdCrJA3KTlqRCOAXitOrlcDNguc6iB7C9HsMNO2ZqupxJ9EdvO7thEF7VcReQJw68YD0Lh9oW3OLjs-L1W9SLfZPDgiVjRQHqO1YEUIbhTc5OCoQh3QMvYSFuI19EahSqJyrgA-xT4snXyMsPkEC94cXeJJfXTNKq_0zzJdGENvn0rNBITmV1rzlnQ9k2VDssQ86f_IeUERAQ5E7XeudxyHhz35TScsgPi6ABJ_sRwNg2xsDiYpMnBCv9imJSlS48U",
    },
];

export function Technologies() {
    return (
        <section className="space-y-6">
            <h3 className="text-xs font-bold tracking-widest text-text-muted-light dark:text-text-muted-dark uppercase">
                Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies.map((tech) => (
                    <div
                        key={tech.name}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:border-primary/50 transition-colors group h-24"
                    >
                        <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={32}
                            height={32}
                            className="mb-2 group-hover:scale-110 transition-transform"
                        />
                        <span className="text-xs font-medium text-text-muted-light dark:text-text-muted-dark group-hover:text-primary">
                            {tech.name}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
