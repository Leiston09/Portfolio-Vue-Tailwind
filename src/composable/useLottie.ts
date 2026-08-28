import { onBeforeUnmount } from "vue";
import lottie from "lottie-web";

export const useLottie = () => {
  const animations: Record<string, any> = {};

  /* =========================
     CARGAR VARIOS ICONOS
  ========================= */

  const loadIcons = async (
    items: { icon: string }[],
    getContainer: (icon: string) => HTMLElement | undefined,
    path: string,
  ) => {
    for (const item of items) {
      const container = getContainer(item.icon);

      if (!container) continue;

      try {
        const response = await fetch(
          `${path}/${item.icon}.json`,
        );

        if (!response.ok) {
          console.error(
            `No se pudo cargar el icono: ${item.icon}`,
          );
          continue;
        }

        const animationData = await response.json();

        animations[item.icon] = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData,
        });
      } catch (error) {
        console.error(
          `Error cargando el icono ${item.icon}:`,
          error,
        );
      }
    }
  };

  /* =========================
     CARGAR UN SOLO ICONO
     PARA OPTIONS BAR
  ========================= */

  const loadIcon = async (
    icon: string,
    container: HTMLElement,
    path: string,
  ) => {
    try {
      const response = await fetch(
        `${path}/${icon}.json`,
      );

      if (!response.ok) {
        console.error(
          `No se pudo cargar el icono: ${icon}`,
        );
        return null;
      }

      const animationData = await response.json();

      return lottie.loadAnimation({
        container,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData,
      });
    } catch (error) {
      console.error(
        `Error cargando el icono ${icon}:`,
        error,
      );

      return null;
    }
  };

  /* =========================
     DESTRUIR UN ICONO
  ========================= */

  const destroyAnimation = (animation: any) => {
    if (!animation) return;

    animation.destroy();
  };

  /* =========================
     DESTRUIR TODOS
  ========================= */

  const destroyAnimations = () => {
    Object.values(animations).forEach((animation) => {
      animation.destroy();
    });
  };

  /* =========================
     LIMPIEZA AUTOMÁTICA
  ========================= */

  onBeforeUnmount(() => {
    destroyAnimations();
  });

  return {
    animations,
    loadIcons,
    loadIcon,
    destroyAnimation,
    destroyAnimations,
  };
};