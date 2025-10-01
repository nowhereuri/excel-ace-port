import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Copy, MessageCircle, Github, Linkedin, Globe } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import contactData from "@/data/contact.json";

export const Contact = () => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const openKakaoTalk = () => {
    window.open(`https://open.kakao.com/o/${contactData.kakaoId}`, "_blank");
  };

  const sendEmail = () => {
    window.location.href = `mailto:${contactData.email}`;
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can help transform your business with data-driven solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <Card className="p-8 card-glass">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium mb-1">Email</div>
                  <div className="text-sm text-muted-foreground">{contactData.email}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium mb-1">Phone</div>
                  <div className="text-sm text-muted-foreground">{contactData.phone}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium mb-1">Location</div>
                  <div className="text-sm text-muted-foreground">{contactData.location}</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions Card */}
          <Card className="p-8 card-glass">
            <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <Button
                className="w-full justify-start gap-3"
                variant="default"
                size="lg"
                onClick={sendEmail}
              >
                <Mail className="h-5 w-5" />
                Send Email
              </Button>

              <Button
                className="w-full justify-start gap-3"
                variant="outline"
                size="lg"
                onClick={() => copyToClipboard(contactData.email, "Email")}
              >
                <Copy className="h-5 w-5" />
                Copy Email
              </Button>

              <Button
                className="w-full justify-start gap-3"
                variant="outline"
                size="lg"
                onClick={openKakaoTalk}
              >
                <MessageCircle className="h-5 w-5" />
                KakaoTalk
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <h4 className="font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(contactData.social.github, "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(contactData.social.linkedin, "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open(contactData.social.website, "_blank")}
                >
                  <Globe className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
