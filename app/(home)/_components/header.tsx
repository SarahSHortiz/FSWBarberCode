import { Card, CardContent} from "@/app/_components/ui/card";
import Image from "next/image";
import { Button } from "@/app/_components/ui/button";
import { MenuIcon } from "lucide-react";


const Header = () => {
    return (
        <Card>
            <CardContent className="px-5 justify-between flex flex-row items-center">
                <Image src="/logo.png" alt="logo" height={22} width={120} />
                <Button variant="outline" size="icon">
                    <MenuIcon></MenuIcon>
                </Button>
            </CardContent>
            
        </Card>
    );
}

export default Header;