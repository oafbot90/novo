import React, { useState, useEffect } from "react";
import { Trophy } from "lucide-react";

export function Hero() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const calculateTimeRemaining = (endTime) => {
    const total = endTime - Date.now();
    if (total > 0) {
      return {
        days: Math.floor(total / (1000 * 60 * 60 * 24)),
        hours: Math.floor((total / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((total / (1000 * 60)) % 60),
        seconds: Math.floor((total / 1000) % 60),
        total,
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  };

  useEffect(() => {
    const fetchEndTime = async () => {
      try {
        const response = await fetch("https://cronometro-822w.onrender.com/api/tournament-end-time");
        const data = await response.json();
        const endTime = data.endTime;

        const interval = setInterval(() => {
          const time = calculateTimeRemaining(endTime);
          setTimeRemaining(time);

          if (time.total <= 0) {
            clearInterval(interval);
            setMessage("O torneio já começou!");
          }
        }, 1000);

        setLoading(false);
        return () => clearInterval(interval);
      } catch (error) {
        console.error("Erro ao buscar o tempo restante:", error);
        setLoading(false);
      }
    };

    fetchEndTime();
  }, []);

  if (loading) {
    return <div className="text-center text-white">Carregando...</div>;
  }

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://i.ibb.co/8PcMYGD/BCB1-D862-A921-43-CB-9-DF4-357484321766.webp"
          alt="Gaming Background"
        />
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-7xl py-24 px-6 sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Trophy className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Clyde Royale Championship - Temporada 1
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">Prêmio total: 600 Dimas + Passe</p>

          <div className="mt-10 flex justify-center gap-8">
            {timeRemaining.total > 0 ? (
              <>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white">{timeRemaining.days}</div>
                  <div className="text-sm text-gray-300">Dias</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white">{timeRemaining.hours}</div>
                  <div className="text-sm text-gray-300">Horas</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white">{timeRemaining.minutes}</div>
                  <div className="text-sm text-gray-300">Minutos</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white">{timeRemaining.seconds}</div>
                  <div className="text-sm text-gray-300">Segundos</div>
                </div>
              </>
            ) : (
              <div className="text-center text-5xl font-bold text-yellow-500">
                {message}
              </div>
            )}
          </div>

          <div className="mt-10">
            <a
              href="/register"
              className="rounded-md bg-yellow-500 px-6 py-3 text-lg font-semibold text-gray-900 shadow-sm hover:bg-yellow-400"
            >
              Inscreva-se Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
