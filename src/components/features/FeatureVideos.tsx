
import React, { useState } from 'react';
import { Play, PauseCircle, QrCode, Smartphone, Globe, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoFeature {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  icon: React.ReactNode;
}

export function FeatureVideos() {
  const [activeVideo, setActiveVideo] = useState<string>('qr-code');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const features: VideoFeature[] = [
    {
      id: 'qr-code',
      title: 'QR Code Dinamici',
      description: 'Genera QR code che puntano sempre ai contenuti aggiornati, modificabili in tempo reale.',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/840201169/rendition/720p/file.mp4?loc=external',
      icon: <QrCode className="h-6 w-6" />
    },
    {
      id: 'ar',
      title: 'Realtà Aumentata',
      description: 'Permetti ai clienti di visualizzare i prodotti in AR direttamente dal loro dispositivo.',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/840205252/rendition/720p/file.mp4?loc=external',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 'multilingual',
      title: 'Traduzione Automatica',
      description: 'Ottieni cataloghi multilingua con traduzione automatica per raggiungere clienti internazionali.',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/840207507/rendition/720p/file.mp4?loc=external',
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 'analytics',
      title: 'Analytics Avanzati',
      description: 'Analizza il comportamento degli utenti con heatmap e metriche dettagliate di engagement.',
      videoUrl: 'https://player.vimeo.com/progressive_redirect/playback/840209511/rendition/720p/file.mp4?loc=external',
      icon: <LineChart className="h-6 w-6" />
    }
  ];

  const activeFeature = features.find(f => f.id === activeVideo) || features[0];

  const togglePlayPause = () => {
    const video = document.getElementById('feature-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Guarda le nostre funzionalità <span className="text-gradient">in azione</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Scopri come DigiCatalog può trasformare il tuo business con esempi video interattivi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden relative aspect-video glass-card">
            <video
              id="feature-video"
              src={activeFeature.videoUrl}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnded}
              controls={false}
            ></video>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-16 w-16 rounded-full bg-white/20 hover:bg-white/30 text-white"
                onClick={togglePlayPause}
              >
                {isPlaying ? 
                  <PauseCircle className="h-10 w-10" /> : 
                  <Play className="h-10 w-10 ml-1" />
                }
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{activeFeature.title}</h3>
              <p className="text-white/80">{activeFeature.description}</p>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                className={`text-left p-6 rounded-xl transition-all ${
                  feature.id === activeVideo
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={() => {
                  setActiveVideo(feature.id);
                  setIsPlaying(false);
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`${
                    feature.id === activeVideo
                      ? 'bg-white/20 text-white'
                      : 'bg-primary/10 text-primary dark:bg-primary/20'
                    } p-2 rounded-lg`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      feature.id === activeVideo ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${
                      feature.id === activeVideo ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button variant="outline" className="w-full justify-center">
                Guarda tutti i video tutorial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
