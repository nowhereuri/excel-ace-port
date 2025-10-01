import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Admin() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" },
  ];

  const downloadJSON = (section: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${section}.json...`,
    });
    // In a real implementation, this would trigger actual file download
  };

  const downloadAll = () => {
    toast({
      title: "Download Started",
      description: "Downloading all data as portfolio-data.json...",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="section-container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                  Manage your portfolio content
                </p>
              </div>
            </div>
            <Button onClick={downloadAll} className="gap-2">
              <Download className="h-4 w-4" />
              Download All Data
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container py-8">
        <Card className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 gap-2 h-auto">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {tabs.map((tab) => (
              <TabsContent key={tab.id} value={tab.id} className="mt-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">{tab.label} Section</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadJSON(tab.id)}
                      className="gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download {tab.label} JSON
                    </Button>
                  </div>

                  <Card className="p-8 bg-muted/30">
                    <div className="text-center py-12">
                      <p className="text-lg text-muted-foreground mb-4">
                        Admin editing functionality coming soon!
                      </p>
                      <p className="text-sm text-muted-foreground">
                        For now, you can manually edit the JSON files in the{" "}
                        <code className="px-2 py-1 bg-background rounded text-primary">
                          src/data/
                        </code>{" "}
                        folder.
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Use the download buttons to export current data, make your edits,
                        and replace the files before redeploying.
                      </p>
                    </div>
                  </Card>

                  <div className="bg-muted/50 border border-border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Quick Guide:</h3>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Click "Download {tab.label} JSON" to export current data</li>
                      <li>Edit the downloaded file with your preferred editor</li>
                      <li>Replace the file in <code>src/data/{tab.id}.json</code></li>
                      <li>Preview changes by refreshing the main portfolio page</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
